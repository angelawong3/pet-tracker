
const Login = express();

app.use(express.json())
app.post('/user/login', async (req, res) => {
  const { password, username } = req.body
  if (!password || !username) {
    res.sendStatus(400)
    return
  }

  res.send({ userId:0 })
});

module.exports = Login;