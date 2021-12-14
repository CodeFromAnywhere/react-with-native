import axios from "axios";

export const postMultipart = (endpoint: string, formData: BodyInit) => {
  return axios({
    method: "post",
    //url: `${Constants.SERVER_ADDR}/${endpoint}`,
    data: formData,
    headers: {
      // "User-Agent": "*",
      // "Content-Type": "multipart/form-data",
    },
  })
    .then(function ({ data }: any) {
      //handle success
      console.log(data);
      return data;
    })
    .catch(function (response: any) {
      //handle error
      console.log(response);
    });
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#CCC" offset="20%" />
      <stop stop-color="#AAA" offset="50%" />
      <stop stop-color="#CCC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#CCC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const apiCall = (endpoint: string, method: string, body?: object) => {
  return fetch(endpoint, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "User-Agent": "*",
    },
    body: method === "POST" ? JSON.stringify(body) : undefined,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
