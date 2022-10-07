import Commerce from "@chec/commerce.js";

// export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const devEnvironment = process.env.NODE_ENV === 'development';


const commerceConfig= {
    axiosConfig: {
        headers : {
            'X-Chec-Agent': 'commerce.js/v2',
            'Chec-Version': '2021-09-29'
        },
    },
};

if (!checAPIKey) {
    throw Error("Your public API key must be provided as an ENV")
}

export default new Commerce(
    checAPIKey,
    devEnvironment,
    commerceConfig
);