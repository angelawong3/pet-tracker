const Login = require('./login.js');

describe('POST /users', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(Login).post('./login.js').send({
      username: 'username',
      password: 'password',
    });
    expect(response.statusCode).toBe(200);
  });

  it('should specify json in the content type header', async () => {
    const response = await request(Login).post('./login.js').send({
      username: 'username',
      password: 'password',
    });
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  it('response has userId', async () => {
    const response = await request(Login).post('./login.js').send({
      username: 'username',
      password: 'password',
    });
    expect(response.body.userId).toBeDefined();
  });

  it('should respond with a status code of 400 when un/pw is missing', async () => {
    const bodyData = [{ username: 'username' }, { password: 'password' }, {}];
    for (const body of bodyData) {
      const response = await request(app).post('./login.js').send(body);
      expect(response.statusCode).toBe(400);
    }
  });
});
