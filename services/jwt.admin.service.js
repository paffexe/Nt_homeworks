const config = require("config");
const jwt = require("jsonwebtoken");

class AdminJwtService {
  constructor(
    adminAccessKey,
    adminRefreshKey,
    adminAccessTime,
    adminRefreshTime
  ) {
    this.adminAccessKey = adminAccessKey;
    this.adminRefreshKey = adminRefreshKey;
    this.adminAccessTime = adminAccessTime;
    this.adminRefreshTime = adminRefreshTime;
  }

  generateTokens(payload) {
    const adminAccessToken = jwt.sign(payload, this.adminAccessKey, {
      expiresIn: this.adminAccessTime,
    });

    const adminRefreshToken = jwt.sign(payload, this.adminRefreshKey, {
      expiresIn: this.adminRefreshTime,
    });
    return {
      adminAccessToken,
      adminRefreshToken,
    };
  }

  async verifyAdminAccessToken(token) {
    return jwt.verify(token, this.adminAccessKey);
  }

  async verifyAdminRefreshToken(token) {
    return jwt.verify(token, this.adminRefreshKey);
  }
}

module.exports = new AdminJwtService(
  config.get("adminAccess_key"),
  config.get("adminRefresh_key"),
  config.get("adminAccess_time"),
  config.get("adminRefresh_time")
);
