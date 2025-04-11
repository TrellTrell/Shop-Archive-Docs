# Unofficial [Shop Archives](https://yapper.shop/) Docs

## API

Base URL

` https:/api.yapper.shop `

| Version | Status |
| --- | --- |
| 2 | Available |
| 1 | Discontinued |

**API Token**

` token: token `

**API Password**

Example API Password

` password: 3pq3ci2tnuleze9y93c1hhq5typsdganyyllnfut1t18n9ghrzkfxp3 `

**API Authorization**

Example API Authorization

` authorization: 5M1UFGhgyzx3K2K6z3FBG4L5e9em84 `

| Long | Short |
| --- | --- |
| Requires API Password or API Authorization | -p |

**Endpoints:**
1. collectibles-shop
  - https://api.yapper.shop/v2/collectibles-shop
  - **params:**
    - tab = home / shop / orbs / leaks / nameplates / consumables / miscellaneous / marketing / pplus-home -p / pplus -p
    - has-leaks = true
    - is-test-fetch = true -p
    - include-no-sku-items = true
    - include-unpublished = true -p

| Endpoint | Status |
| --- | --- |
| /collectibles-shop | 400 | 
| /collectibles-shop?tab=home | 200 | 
| /collectibles-shop?tab=pplus | 403 | 
| /collectibles-shop?tab=home&include-unpublished=true | 403 | 
| /collectibles-shop?tab=home&is-test-fetch=true | 403 | 

2. profile-effects
  - https://api.yapper.shop/v2/profile-effects
  - **params:**
    - tab = discord / pplus
    - is-test-fetch = true -p

| Endpoint | Status |
| --- | --- |
| /profile-effects | 400 | 
| /profile-effects?tab=discord | 200 | 
| /profile-effects?tab=discord&is-test-fetch=true | 403 | 
 
3. community
  - https://api.yapper.shop/v2/community
  - **params:**
    - tab = themes
    - is-test-fetch = true -p
    - include-unpublished = true -p

| Endpoint | Status |
| --- | --- |
| /community | 400 | 
| /community?tab=themes | 200 | 
| /community?tab=themes&include-unpublished=true | 403 | 
| /community?tab=themes&is-test-fetch=true | 403 | 
