# Codespace起動時に実行されるスクリプト

# Node.jsバージョンの確認
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# 依存関係のインストール
echo "Installing dependencies..."
npm install

# ESLintの動作確認
echo "Testing ESLint..."
npm run lint || echo "ESLint found issues - use 'npm run lint:fix' to fix them"

echo "Setup complete! ESLint is ready to use."
