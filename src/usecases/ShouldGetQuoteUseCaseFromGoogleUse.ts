import {injectable} from "tsyringe";
// @ts-ignore
const CC = require('currency-converter-lt')

interface Request {
    from: string;
    to: string;
}

@injectable()
class ShouldGetQuoteUseCaseFromGoogleUse {

    public async execute({from, to}: Request) {
        let currencyConverter = new CC({from: from, to:to, amount:1});
        return await currencyConverter.convert(1);
    }
}

export default ShouldGetQuoteUseCaseFromGoogleUse;