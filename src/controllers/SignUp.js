"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const utils_1 = require("../utils");
class SignUpController {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async create(request, response) {
        // Pegando corpo da quequisição
        console.log(request.body);
        const { name, email, password } = request.body;
        const trx = await connection_1.default.transaction();
        try {
            // pega email se no banco de dados
            const emailDB = await connection_1.default('users')
                .where('email', email)
                .then(results => {
                if (results[0].email === email)
                    return results[0].email;
            })
                .catch(() => null);
            // Valida email
            if (emailDB === email) {
                return response.status(400).json({
                    error: 'Email já está sendo usado',
                });
            }
            const hash = utils_1.createHash(password);
            // Salvando no banco de dados
            await trx('users').insert({
                name,
                email,
                password: hash,
            });
            await trx.commit();
            // mensagem de sucesso
            return response.status(201).json({
                mensagem: 'Cadastrado com sucesso',
            });
        }
        catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpect error while creating new User',
            });
        }
    }
}
exports.default = SignUpController;
