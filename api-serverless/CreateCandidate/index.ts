import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import createConnection from '../shared/mongo';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const candidate = req.body || {};

    const {db, connection} = await createConnection();
    const Candidates = db.collection('candidates');
    try {
        const candidates = await Candidates.insert(candidate);
        connection.close();

        context.res = {
            status: 201,
            body: candidates.ops[0]
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error, could not insert at database'
        }
    }

};

export default httpTrigger;