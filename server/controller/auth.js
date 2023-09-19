const jwt = require("jsonwebtoken")

exports.login = (req, res) => {
    const { username, password } = req.body
    console.log(`${username} ${process.env.USERNAME}`)
    console.log(`${password} ${process.env.PASSWORD}`)
    if (username === process.env.USERNAME && password === process.env.PASSWORD) {
        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1d'})
        return res.json({token})
    } else {
        return res.status(400).json({error: 'Authentication failed!'})
    }
}