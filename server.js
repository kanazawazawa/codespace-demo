import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルの配信
app.use(express.static(path.join(__dirname, 'public')));

// JSON パースミドルウェア
app.use(express.json());

// ルート
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API エンドポイント
app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Hello from Express!',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: '田中太郎', email: 'tanaka@example.com' },
        { id: 2, name: '佐藤花子', email: 'sato@example.com' },
        { id: 3, name: '山田次郎', email: 'yamada@example.com' }
    ];
    res.json(users);
});

app.listen(port, () => {
    console.log(`🚀 サーバーが http://localhost:${port} で起動しました`);
});
