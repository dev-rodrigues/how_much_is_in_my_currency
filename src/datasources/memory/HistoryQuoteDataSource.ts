import HistoryQuoteRepository from "../../repositories/HistoryQuoteRepository";

export type HistoryQuote = Map<string, number[]>;
export const tokens: HistoryQuote = new Map();

class HistoryQuoteDataSource implements HistoryQuoteRepository {
    get(key: string): number[] {
        return tokens.get(key) ?? [];
    }
    save(key: string, value: number): void {
        const current = tokens.get(key) ?? [];
        tokens.set(key, [...current, value]);
    }
}

export default HistoryQuoteDataSource;