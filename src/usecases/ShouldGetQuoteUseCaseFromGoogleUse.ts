import {injectable} from "tsyringe";

// @ts-ignore
const CC = require('currency-converter-lt')

interface Request {
    from: string;
    to: string;
}

interface Response {
    key: string;
    quote: number;
    from: string;
    to: string;
}

@injectable()
class ShouldGetQuoteUseCaseFromGoogleUse {

    public async execute({from, to}: Request): Promise<Response> {
        const currencyConverter = new CC({from: from, to:to, amount:1});
        const quote = await currencyConverter.convert(1);

        return {
            key: `${from.toUpperCase()}-${to.toUpperCase()}`,
            quote,
            from,
            to
        }
    }
}

export default ShouldGetQuoteUseCaseFromGoogleUse;