# Unofficial [Shop Archives](https://yapper.shop/) Docs

## API

Base URL

` https://shop-archives-api.vercel.app/api `

| Version | Status |
| --- | --- |
| 2 | Available |
| 1 | Discontinued |

**API Token**

` token: token `

**API Password**

Example API Password

` password: 3pq3ci2tnuleze9y93c1hhq5typsdganyyllnfut1t18n9ghrzkfxp3zze6jfanind74ye3bgfwmyyi4qwuzidnw5eujurqg8vdu `

| Long | Short |
| --- | --- |
| Requires API Password | -p |

**Endpoints:**
1. collectibles-shop
  - https://shop-archives-api.vercel.app/api/collectibles-shop
  - **params:**
    - tab = home / shop / orbs / leaks / consumables / miscellaneous / pplus-home -p / pplus -p
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
  - https://shop-archives-api.vercel.app/api/profile-effects
  - **params:**
    - tab = discord / pplus
    - is-test-fetch = true -p

| Endpoint | Status |
| --- | --- |
| /profile-effects | 400 | 
| /profile-effects?tab=discord | 200 | 
| /profile-effects?tab=discord&is-test-fetch=true | 403 | 
 
