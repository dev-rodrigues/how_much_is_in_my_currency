import { container } from 'tsyringe';

import HistoryQuoteDataSource from "../../datasources/memory/HistoryQuoteDataSource";
import HistoryQuoteRepository from "../../repositories/HistoryQuoteRepository";

container.registerSingleton<HistoryQuoteRepository>('HistoryQuoteRepository', HistoryQuoteDataSource);
