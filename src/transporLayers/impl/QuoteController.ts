import {Request, Response} from "express";
import {container} from "tsyringe";

import ShouldGetQuoteUseCaseFromGoogleUse from "../../usecases/ShouldGetQuoteUseCaseFromGoogleUse";

class QuoteController {
    public async handler(request:Request , response:Response):Promise<Response>{
        try {

            const from = request.params.from;
            const to = request.params.to;

            const useCase = container.resolve(ShouldGetQuoteUseCaseFromGoogleUse);

            const result = await useCase.execute({from, to});

            return response.status(200).json(result);

        } catch (err) {
            return response.status(400).json({
                error: (err as Error).message
            });
        }
    }
}

export default QuoteController
