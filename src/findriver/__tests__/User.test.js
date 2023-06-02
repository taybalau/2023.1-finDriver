import UserModel from '../back/model/userModel';

jest.mock('../back/model/userModel');

beforeEach(() => {
    UserModel.mockClear();
});

describe('Supabase', () => {
    it('Insert success', async () => {
        let usuario1 = new UserModel("Felipe", "felipe@gmail.com", "1223455", "cachorro", "sorvete", "food", "pet");
        let usuarioFunc = jest.spyOn(usuario1, 'insertUser');

        usuario1.insertUser();

        expect(usuarioFunc).toHaveBeenCalled();
        usuarioFunc.mockRestore();
    });
});

//echo "export const environment = {SUPABASE_URL: 'http://localhost:3000', SUPABASE_ANON_KEY: ''}" > .env.js