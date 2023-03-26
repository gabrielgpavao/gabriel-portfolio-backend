import { app } from './app'
import { AppDataSource } from './data-source'
import 'dotenv/config'

AppDataSource.initialize().then(() => {
    console.log('Database connected!')
	
	const PORT: string = process.env.PORT || '3000'
		
    app.listen(PORT, () => {
        console.log('Server is running!')
    })
}).catch((error) => {
    console.log(error)
})
