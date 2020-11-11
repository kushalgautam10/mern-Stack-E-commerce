import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Kushal Gautam',
        email: 'kushal@test.com',
        password: bcrypt.hashSync('123456',10),
      
    },
    {
        name: 'Sagar Gautam',
        email: 'sagar@test.com',
        password: bcrypt.hashSync('123456',10),
       
    },
]
export default users