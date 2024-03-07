// const { spawn } = require('child_process');
var fs = require('fs');
const fetch = require("node-fetch");
function isObject(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Object;
}
// Leon Wong "ACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU" Tiffany Cheung: "ACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8"
async function test_func(num,name,namecode) {
    var res = null;
    var isJson = false;
    console.log(num);
    // Use less
    switch (num) {
        case 0:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(vanityName:)&queryId=voyagerIdentityDashProfiles.e9a2777bb100f85817cfc3e6fd391847", {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-top-card-core",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false",
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
            // Use Less
        case 1:
            
        case 2:
          res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(vanityName:${name})&queryId=voyagerIdentityDashProfiles.895fdb8a5b9db42b70e4cb37c4a44507`, {
  "headers": {
    "accept": "application/vnd.linkedin.normalized+json+2.1",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
    "csrf-token": "ajax:7050600770904385570",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-li-lang": "en_US",
    "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
    "x-li-pem-metadata": "Voyager - Profile=profile-top-card-supplementary",
    "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
    "x-restli-protocol-version": "2.0.0",
    "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
    "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
        // case 3:

//         case 4:
//           fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU)&queryId=voyagerIdentityDashProfileCards.24d92c93b2547b2e630c376b3ad29653", {
//   "headers": {
//     "accept": "application/vnd.linkedin.normalized+json+2.1",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
//     "csrf-token": "ajax:7050600770904385570",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-li-lang": "en_US",
//     "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
//     "x-li-pem-metadata": "Voyager - Profile=profile-tab-initial-cards",
//     "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
//     "x-restli-protocol-version": "2.0.0",
//     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
//     "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });    

// Where Intern is located
        case 5:
            // 24d92c93b2547b2e630c376b3ad29653
            res = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3A${namecode})&queryId=voyagerIdentityDashProfileCards.24d92c93b2547b2e630c376b3ad29653`, {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                // "sec-fetch-site": "same-origin",
                // "x-li-lang": "en_US",
                // "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                // "x-li-pem-metadata": "Voyager - Profile=profile-tab-initial-cards",
                // "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                // "x-restli-protocol-version": "2.0.0",
                "Referer": `https://www.linkedin.com/in/${name}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 6:
            res = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3A${namecode})&queryId=voyagerIdentityDashProfileCards.e3b18a55a02f0b074c4d2c912493463f`, {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                // "sec-fetch-site": "same-origin",
                // "x-li-lang": "en_US",
                // "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                // "x-li-pem-metadata": "Voyager - Profile=profile-tab-deferred-cards",
                // "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                // "x-restli-protocol-version": "2.0.0",
                // "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/in/${name}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 7:
            res = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(vieweeId:ACoAADdekkMBNgEpjm6DLvCvnuZ_IoWY4fSCFBM)&queryId=voyagerLearningDashLearningRecommendations.8e663d6ad7fb5a0155d5a1cca3082e0b`, {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3A${namecode}&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 8:
            res = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3A${namecode})&queryId=voyagerIdentityDashOpenToCards.8c2dbbc3d26ee70a0ecbb632187726ff`, {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=open-to-section",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3A${namecode}&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 9:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU,sectionType:relationship_explorer)&queryId=voyagerIdentityDashProfileCards.4ab878c4f9ed3d90af7caf12331717fd", {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-cards-widget-recommendations",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false",
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 10:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU)&queryId=voyagerIdentityDashProfileCards.4ab878c4f9ed3d90af7caf12331717fd", {
          "headers": {
            "accept": "application/vnd.linkedin.normalized+json+2.1",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
            "csrf-token": "ajax:7050600770904385570",
            "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-li-lang": "en_US",
            "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
            "x-li-pem-metadata": "Voyager - Profile=profile-cards-right-rail",
            "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
            "x-restli-protocol-version": "2.0.0",
            "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
            "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU&keywords=lap%20wang%20wong&origin=RICH_QUERY_SUGGESTION&position=0&searchId=98a4ffe2-8a71-42f3-b124-0eb1d087abc5&sid=cxh&spellCorrectionEnabled=false",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": null,
          "method": "GET"
        });
        case 11:
            res = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(memberIdentity:${name})&queryId=voyagerIdentityDashProfiles.7ca063cf163e5eea69e01132b41784f9`, {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/in/${name}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 12:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU,sectionType:browsemap-recommendations)&queryId=voyagerIdentityDashProfileComponents.0aa4fe1d7819f1b21efc5be88cc3735d", {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=view-browsemap-recommendations-details",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/in/${name}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 13:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU,sectionType:pymk-recommendations-from-title)&queryId=voyagerIdentityDashProfileComponents.0aa4fe1d7819f1b21efc5be88cc3735d", {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=view-pymk-recommendations-from-title-details",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/in/${name}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        case 14:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU,sectionType:company-recommendations)&queryId=voyagerIdentityDashProfileComponents.0aa4fe1d7819f1b21efc5be88cc3735d", {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=view-company-recommendations-details",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/in/${name}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
        // case 15:res = await
        // case 16:res = await
        // case 17:res = await
        // case 18:res = await
        // case 19:res = await
        // case 20:res = await
        // case 21:res = await
        // case 22:res = await
        // case 23:res = await
        // case 24:res = await
        // case 25:res = await
        // case 26:res = await
        // case 27:res = await
        // case 28:res = await
        // case 29:res = await
        // case 30:res = await
        // case 31:res = await
        // case 32:res = await
        // case 33:res = await
        // case 34:res = await
        // case 35:res = await
        // case 36:res = await
        // case 37:res = await
        // case 38:res = await
        // case 39:res = await
        // case 40:res = await
        // case 41:res = await
        // case 42:res = await
        // case 43:res = await
    }
    console.log(res);
    const data = await res.json();
    return data;
    
}


// leonwonglww tiffany-cheung-064475201 james-au-8ab12721b
async function multiRun() {
    for (let index = 0; index < 33; index++) {
        // array.length
        // const element = array[index];
        let name = "tiffany-cheung-064475201";
        await test_func(index,name).then((res)=>{
            // console.log(res.json());
            // var Handle = null;
            Handle = JSON.stringify(res);
            fs.appendFile("newData.json", Handle, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            // if (isObject(res.json())) {
                
        
            // } else {
            //     console.log(`${index} not a json`);
            //     fs.appendFile("fault.txt", res, function(err) {
            //         if (err) {
            //             console.log(err);
            //         }
            //     });
            // }
                
            
        }).catch((reason)=>{
            console.log(`Failed at ${index}, reason ${reason}`);
        });
        
    }
}
// multiRun();
let index = 5;

let name = "leonwonglww";
let namecode = "ACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU";
// let name = "tiffany-cheung-064475201";
// let namecode = "ACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8";
// test_func(index,name,namecode).then((x)=>{
//   // console.log(x);
//   let dft = x["included"];
//   dft.forEach(element => {
//     // console.log(element);
//     console.log(element["entityUrn"]);
//   });
//   // const x =resjson["included"];

// // // x.forEach(element => {
// // //     console.log(element["entityUrn"]);
// // // });
//   // console.log(dft);
//   fs.writeFile("newData.json", JSON.stringify(x), function(err) {
//     if (err) {
//         console.log(err);
//     }
//   });
// });

function getAbout(json) {
  const aboutComponent = json?.included?.find((d) =>
    d.entityUrn?.includes("ABOUT")
  );
  return aboutComponent?.topComponents?.[1]?.components?.textComponent?.text
    ?.text;
}

function getExperience(json) {
  const experienceEntity = json?.included?.find(
    (d) =>
      !d?.entityUrn?.includes("VOLUNTEERING_EXPERIENCE") &&
      d?.entityUrn?.includes("EXPERIENCE")
  );

  return experienceEntity?.topComponents?.[1].components?.fixedListComponent?.components?.map(
    (e) => {
      const entity = e?.components?.entityComponent;
      return {
        title: entity?.title?.text,
        companyName: entity?.subtitle?.text,
        description:
          entity?.subComponents?.components?.[0]?.components?.fixedListComponent
            ?.components?.[0]?.components?.textComponent?.text?.text,
        dates: entity?.caption?.text,
        location: entity?.metadata?.text,
        companyUrl: entity?.image?.actionTarget,
      };
    }
  );
}

function getVolunteering(json) {
  const volunteeringEntity = json?.included?.find((d) =>
    d?.entityUrn?.includes("VOLUNTEERING_EXPERIENCE")
  );

  if (volunteeringEntity?.topComponents.length === 0) {
    return [];
  }

  return volunteeringEntity?.topComponents?.[1]?.components?.fixedListComponent?.components?.map(
    (e) => {
      const entity = e?.components?.entityComponent;
      return {
        title: entity?.title?.text,
        companyName: entity?.subtitle?.text,
        description:
          entity?.subComponents?.components?.[0]?.components?.textComponent
            ?.text?.text,
        dates: entity?.caption?.text,
        location: entity?.metadata?.text,
        companyUrl: entity?.image?.actionTarget,
      };
    }
  );
}

function getEducation(json) {
  const educationComponent = json?.included?.find((d) => {
    return d?.entityUrn?.includes("EDUCATION");
  });

  if (educationComponent?.topComponents.length === 0) {
    return [];
  }

  return educationComponent?.topComponents?.[1]?.components?.fixedListComponent?.components?.map(
    (e) => {
      const entity = e?.components?.entityComponent;
      return {
        schoolName: entity?.title?.text,
        degree: entity?.subtitle?.text,
        description:
          entity?.subComponents?.components?.[0]?.components?.insightComponent
            ?.text?.text?.text,
        dates: entity?.caption?.text,
        schoolUrl: entity?.image?.actionTarget,
      };
    }
  );
}

function getLocation(json) {
  const locationComponent = json?.included?.find(
    (d) =>
      !d?.entityUrn?.includes("VOLUNTEERING_EXPERIENCE") &&
      d?.entityUrn?.includes("EXPERIENCE")
  );
  return locationComponent?.topComponents[1]?.components?.fixedListComponent
    ?.components?.[1]?.components?.entityComponent?.metadata?.text;
}
//  2d68c43b54ee24f8de25bc423c3cf7e4 1690738384797705558
// '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"'
async function getMiddleProfile(profileId,name) {
  try {
    const res = await fetch(
      `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3A${profileId})&&queryId=voyagerIdentityDashProfileCards.e9a2777bb100f85817cfc3e6fd391847`,
      {
        headers: {
          accept: "application/vnd.linkedin.normalized+json+2.1",
          "accept-language": "en-US,en-CA;q=0.9,en-AU;q=0.8,en;q=0.7",
          "csrf-token": "ajax:7050600770904385570",
          "sec-ch-ua":
          "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          Referer: `https://www.linkedin.com/in/${name}/`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );
    console.log(res);
    const json = await res.json();
    return json;
    // return {
    //   location: getLocation(json),
    //   about: getAbout(json),
    //   experience: getExperience(json),
    //   education: getEducation(json),
    //   volunteering: getVolunteering(json),
    // };
  } catch (error) {
    console.log("error at middleProfile", error.message);
  }
}

async function getTopProfile(handle) {
  try {
    const res = await fetch(
      `https://www.linkedin.com/voyager/api/identity/dash/profiles?q=memberIdentity&memberIdentity=${handle}&decorationId=com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementary-128`,
      {
        headers: {
          accept: "application/vnd.linkedin.normalized+json+2.1",
          "accept-language": "en-US,en-CA;q=0.9,en-AU;q=0.8,en;q=0.7",
          "sec-ch-ua":
            '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie:
            '',
          Referer: "https://www.linkedin.com/in/adrianhorning/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );
    const data = await res.json();
    // return data;
    const entityWithAllTheData = data?.included?.find(
      (d) => d?.publicIdentifier && d?.publicIdentifier !== "adrianhorning"
    );
    const thingWithProfileId =
      entityWithAllTheData?.profileStatefulProfileActions?.overflowActions?.find(
        (d) => {
          return d?.report?.authorProfileId;
        }
      );
    return {
      firstName: entityWithAllTheData?.firstName,
      lastName: entityWithAllTheData?.lastName,
      headline: entityWithAllTheData?.headline,
      handle: entityWithAllTheData?.publicIdentifier,
      url: `https://www.linkedin.com/in/${entityWithAllTheData?.publicIdentifier}/`,
      publicIdentifier: entityWithAllTheData?.publicIdentifier,
      profileId: thingWithProfileId?.report?.authorProfileId,
    };
  } catch (error) {
    console.log("error at topProfile", error.message);
  }
}

// export async function getLinkedinPage(url) {
//   const handle = url.split("/in/")[1].split("/")[0];
//   console.log("handle", handle);

//   const topProfile = await getTopProfile(handle);
//   const middle = await getMiddleProfile(topProfile?.profileId);
//   const recentActivity = await getRecentActivity(topProfile?.profileId);
//   const profile = {
//     ...topProfile,
//     ...middle,
//     recentActivity,
//   };
//   return profile;
// }

// getMiddleProfile(namecode,name).then((x)=>{
//   // fs.appendFile("newData.json", JSON.stringify(x), function(err) {
//   //   if (err) {
//   //       console.log(err);
//   //   }

//   // });
//   console.log(x);
// });
/**
 * 
 * 

urn%3Ali%3Afsd_profile%3


// This one may be myself ACoAAC0ahzQBHqO9XL-u_UIeJvqinhL4tZttLMU

"$recipeTypes": [
                "com.linkedin.e47f55a25ae8e299d12bbe7757beadfa"
            ],


voyagerIdentityDashProfileCards
*/
async function grabProfileNew(name) {
  res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(vanityName:${name})&queryId=voyagerIdentityDashProfiles.895fdb8a5b9db42b70e4cb37c4a44507`, {
              "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;yFyNGqiRRkK8gMhuGe261g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-top-card-supplementary",
                "x-li-track": "{\"clientVersion\":\"1.13.10994\",\"mpVersion\":\"1.13.10994\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; s_sq=%5B%5BB%5D%5D; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; gpv_pn=developer.linkedin.com%2Fproduct-catalog; s_plt=3.23; s_pltp=developer.linkedin.com%2Fproduct-catalog; s_ips=5351; s_tp=5529; s_ppv=developer.linkedin.com%2Fproduct-catalog%2C97%2C97%2C5351%2C7%2C7; s_tslv=1708150339848; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723702341|session#2db29129b5fa46c28c8f35a9d87383c0#1708152201; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19771%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708837442%7C3%7CMCAAMB-1708837442%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708239842s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIigE%252bZtYwSKt9HonbhsFl7XCNgrAmBRTIdvcbIFAEi%252bdmsWlAcyW0jDzmwR6j7mXgUNQR%252btN7VD1HYmvZ6Ol%252fcotL9mJys1vH4ViX7%252fnCV2cLPVyH3CfSLp8y9jyw6zE7idPCwXDp23Dazx2LS%252fSB6VWfpyb3SlQy35tl9s4mCU6zsuL9NuaiQvt%252bT4SMvWK5Fqzjr2mprE1aiPrO5%252bQmiE%253d; li_mc=MTsyMTsxNzA4MjMzODM2OzE7MDIx5t4btlsBjhz/n4a3mRyNRjYiIpq7TNc7TjuIlAmVcGY=; UserMatchHistory=AQL9jMb6-FAzJAAAAY26q-Yy8qZvXtRhiFbCoTqxN0e98CgAUNaGJowA1qb20xx06rYqR0RNfkLZEVysLQm9h2vrG5noR8OiVKKqHZmMi3bRE6ZT4HBUBjbcuJYGAKmaXoerTAoplnLi8Q8gt-zuHJcuYa9c6S5K9NFBGRp7PNlxfwfXTSw6jc7Ao0rluJXtCdmTYxkxiODa-bWZjrq9P63Z_e1W86cN791dL-wGehN1GOmqXWKruhyxMfqii4MMuu62z2HwVIwbYbFfe2JJKE6k2jH8PYiHNL4CtKg-edgmATZwXcFik8qqZlNr9lmBsaLD6x6Z9fpg8_bqCgbAkvf_pYBA2bo; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4254:u=280:x=1:i=1708233845:t=1708320236:v=2:sig=AQEW394kFl-4Z5HaIzt5xv7m7HInoq3Z\"",
                "Referer": `https://www.linkedin.com/in/${name}`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });
            const json = await res.json();
            // const resjson= require('./datafolder/TiffanyContent/TiffanyProfile.json');
            const ite = json["data"]["data"]["identityDashProfilesByMemberIdentity"]["*elements"][0];
            // const ite = resjson["data"]["data"]["identityDashProfilesByMemberIdentity"]["*elements"][0];
            const arr = ite.split(":");
            const namecode= arr[arr.length-1];
            console.log(namecode);
}
// grabProfileNew('tiffany-cheung-064475201');

const fakeUniversityNames = [
  "Academic Heights University",
  "Alpha Omega College",
  "Amberfield University",
  "Aurora University",
  "Bayview College",
  "Brighton University",
  "Cambridge Bay University",
  "Cedarwood College",
  "Charleston University",
  "Columbia Global University",
  "Crimson Valley College",
  "Diamond State University",
  "Eastwood University",
  "Emerald Coast College",
  "Evergreen University",
  "Fairfield College",
  "Golden Gate University",
  "Harmony Hills College",
  "Havenwood University",
  "Highland Park College",
  "Horizon University",
  "Imperial College",
  "Ivy League University",
  "Jubilee College",
  "Lakeview University",
  "Lighthouse College",
  "Majestic Hills University",
  "Maplewood College",
  "Meridian University",
  "Monarch College",
  "New Horizons University",
  "Northwest College",
  "Oakridge University",
  "Oceanview College",
  "Opulent University",
  "Pacific Coast College",
  "Panorama University",
  "Paradise Valley College",
  "Pioneer College",
  "Princeton Heights University",
  "Redwood University",
  "Riverside College",
  "Sapphire University",
  "Seaside College",
  "Silicon Valley University",
  "Southwest College",
  "Springfield University",
  "Stellar College",
  "Summit University",
  "Trinity College",
  "Unity University",
  "Valley View College",
  "Vanguard University",
  "Westbridge College",
  "Whispering Pines University",
  "Willowbrook College",
  "Zenith University",
  // ... and so on
];

// const fakeUniversityNames = [
//   "Academic Heights University",
//   "Alpha Omega College",
//   "Amberfield University",
//   "Aurora University",
//   "Bayview College",
//   "Brighton University",
//   "Cambridge Bay University",
//   "Cedarwood College",
//   "Charleston University",
//   "Columbia Global University",
//   "Crimson Valley College",
//   "Diamond State University",
//   "Eastwood University",
//   "Emerald Coast College",
//   "Evergreen University",
//   "Fairfield College",
//   "Golden Gate University",
//   "Harmony Hills College",
//   "Havenwood University",
//   "Highland Park College",
//   "Horizon University",
//   "Imperial College",
//   "Ivy League University",
//   "Jubilee College",
//   "Lakeview University",
//   "Lighthouse College",
//   "Majestic Hills University",
//   "Maplewood College",
//   "Meridian University",
//   "Monarch College",
//   "New Horizons University",
//   "Northwest College",
//   "Oakridge University",
//   "Oceanview College",
//   "Opulent University",
//   "Pacific Coast College",
//   "Panorama University",
//   "Paradise Valley College",
//   "Pioneer College",
//   "Princeton Heights University",
//   "Redwood University",
//   "Riverside College",
//   "Sapphire University",
//   "Seaside College",
//   "Silicon Valley University",
//   "Southwest College",
//   "Springfield University",
//   "Stellar College",
//   "Summit University",
//   "Trinity College",
//   "Unity University",
//   "Valley View College",
//   "Vanguard University",
//   "Westbridge College",
//   "Whispering Pines University",
//   "Willowbrook College",
//   "Zenith University",
//   // ... and so on
// ];
function generateDegreeName() {
  const degrees = [
    "Bachelor of Arts",
    "Bachelor of Science",
    "Master of Arts",
    "Master of Science",
    "Doctor of Philosophy",
    "Associate of Arts",
    "Associate of Science",
    "Bachelor of Business Administration",
    "Bachelor of Engineering",
    "Master of Business Administration",
    "Master of Engineering",
    "Doctor of Medicine",
    "Juris Doctor",
    "Bachelor of Education",
    "Master of Education",
    "Bachelor of Fine Arts",
    "Master of Fine Arts",
    "Bachelor of Architecture",
    "Master of Architecture",
    "Bachelor of Music",
    "Master of Music",
    "Bachelor of Social Work",
    "Master of Social Work",
    "Bachelor of Nursing",
    "Master of Nursing",
    "Bachelor of Computer Science",
    "Master of Computer Science"
    // Add more degree names as needed
  ];

  function getFullNameFromAbbreviation(abbreviation) {
    switch (abbreviation) {
      case "B.A.":
        return "Bachelor of Arts";
      case "B.S.":
        return "Bachelor of Science";
      case "M.A.":
        return "Master of Arts";
      case "M.S.":
        return "Master of Science";
      case "Ph.D.":
        return "Doctor of Philosophy";
      case "A.A.":
        return "Associate of Arts";
      case "A.S.":
        return "Associate of Science";
      case "B.B.A.":
        return "Bachelor of Business Administration";
      case "B.E.":
        return "Bachelor of Engineering";
      case "M.B.A.":
        return "Master of Business Administration";
      case "M.E.":
        return "Master of Engineering";
      case "M.D.":
        return "Doctor of Medicine";
      case "J.D.":
        return "Juris Doctor";
      case "B.Ed.":
        return "Bachelor of Education";
      case "M.Ed.":
        return "Master of Education";
      case "B.F.A.":
        return "Bachelor of Fine Arts";
      case "M.F.A.":
        return "Master of Fine Arts";
      case "B.Arch.":
        return "Bachelor of Architecture";
      case "M.Arch.":
        return "Master of Architecture";
      case "B.Mus.":
        return "Bachelor of Music";
      case "M.Mus.":
        return "Master of Music";
      case "B.S.W.":
        return "Bachelor of Social Work";
      case "M.S.W.":
        return "Master of Social Work";
      case "B.N.":
        return "Bachelor of Nursing";
      case "M.N.":
        return "Master of Nursing";
      case "B.C.S.":
        return "Bachelor of Computer Science";
      case "M.C.S.":
        return "Master of Computer Science";
      // Add more cases as needed
      default:
        return "";
    }
  }

}
