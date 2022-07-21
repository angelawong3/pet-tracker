const Login = require ('./login.js');

describe('POST /users'), () => {
  describe('given a username and password'), () => {

 
    it('should respond with a 200 status code', async () => {
      const response = await request(app).post("./login.js").send({
        username: "username",
        password: "password"
      })
      expect(response.statusCode).toBe(200)
    })
 }}
    it('should specify json in the content type header', async () => {
      const response = await request(app).post("./login.js").send({
        username: "username",
        password: "password"
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
    it('response has userId', async () => {
      const response = await request(app).post("./login.js").send({
        username: "username",
        password: "password"
      })
      expect(response.body.userId).toBeDefined()
    })
  

  describe('when the username and password is missing', () => {
    it("should respond with a status code of 400", async () => {
      const bodyData = [
        {username: "username"},
        {password: "password"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("./login.js").send(body)
        expect(response.statusCode).toBe(400)
    }})}
  })};
  