import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/api/test', (req: Request, res: Response) => {
    res.json({ message: 'Ceci est un test' });
});

app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});