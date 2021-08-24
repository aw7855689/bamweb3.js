require('dotenv').config();

module.exports = {
  /**
   * Returns the default Btcbam address.
   * @return {String} Default Btcbam address.
   */
  getDefaultBtcbamAddress: () => {
    if (!process.env.SENDER_ADDRESS) {
      throw Error('Must have SENDER_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.SENDER_ADDRESS));
  },

  /**
   * Returns the Btcbam network RPC url.
   * @return {String} The Btcbam network RPC url.
   */
  getBtcbamRPCAddress: () => {
    if (!process.env.Btcbam_RPC_ADDRESS) {
      throw Error('Must have Btcbam_RPC_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.Btcbam_RPC_ADDRESS));
  },

  /**
   * Returns the wallet passphrase to unlock the encrypted wallet.
   * @return {String} The wallet passphrase.
   */
  getWalletPassphrase: () => (process.env.WALLET_PASSPHRASE ? String(Buffer.from(process.env.WALLET_PASSPHRASE)) : ''),

  isWalletEncrypted: async (sweb3) => {
    const res = await sweb3.getWalletInfo();
    return Object.prototype.hasOwnProperty.call(res, 'unlocked_until');
  },
};
