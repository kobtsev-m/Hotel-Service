import axios from 'axios';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import configs from '../configs';

interface RawPublicKey {
  alg: string;
  e: string;
  kid: string;
  kty: string;
  n: string;
  use: string;
}

class AuthService {
  private publicKeys: Record<RawPublicKey['kid'], string> | null = null;

  private async getPublicKeys() {
    if (!this.publicKeys) {
      const { data } = await axios.get<{ keys: RawPublicKey[] }>(configs.aws.cognitoJwks);
      this.publicKeys = data.keys.reduce((acc, rawKey) => {
        acc[rawKey.kid] = jwkToPem(rawKey);
        return acc;
      }, {});
    }
    return this.publicKeys;
  }

  async verifyJwt(token) {
    const tokenSections = (token ?? '').split('.');
    if (tokenSections.length < 2) {
      throw new Error('Requested token is invalid');
    }
    const tokenHeaderJSON = Buffer.from(tokenSections[0], 'base64').toString('utf8');
    const tokenHeader = JSON.parse(tokenHeaderJSON);
    const keys = await this.getPublicKeys();
    const pem = keys[tokenHeader.kid];
    return jwt.verify(token, pem);
  }
}

export default new AuthService();
