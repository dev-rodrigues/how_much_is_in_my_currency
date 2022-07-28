
export default interface HistoryQuoteRepository {
    save(key: string, value: number): void;
    get(key: string): number[];
}
