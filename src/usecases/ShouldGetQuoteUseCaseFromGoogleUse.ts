import {inject, injectable} from "tsyringe";
import HistoryQuoteRepository from "../repositories/HistoryQuoteRepository";

// @ts-ignore
const CC = require('currency-converter-lt')

interface Request {
    from: string;
    to: string;
}

interface Response {
    quote: number;
    quoteLow: number;
    from: string;
    to: string;
}

@injectable()
class ShouldGetQuoteUseCaseFromGoogleUse {

    constructor(
        @inject('HistoryQuoteRepository') private historyQuoteRepository:HistoryQuoteRepository,
    ) {
    }

    public async execute({from, to}: Request): Promise<Response> {
        const currencyConverter = new CC({from: from, to:to, amount:1});
        const key = `${from.toUpperCase()}-${to.toUpperCase()}`;
        const quote = await currencyConverter.convert(1);

        this.historyQuoteRepository.save(key, quote)
        const history = this.historyQuoteRepository.get(key);

        return {
            quote,
            quoteLow: quote - (quote * 0.1),
            from,
            to
        }
    }
}

export default ShouldGetQuoteUseCaseFromGoogleUse;