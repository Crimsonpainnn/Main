// script.js

const blockchain = new Blockchain();

function updateBlockchain() {
    const blockchainDiv = document.getElementById('blockchain');
    blockchainDiv.innerHTML = '';
    blockchain.chain.forEach(block => {
        const blockDiv = document.createElement('div');
        blockDiv.classList.add('block');
        blockDiv.innerHTML = `
            <p><strong>Block #${block.index}</strong></p>
            <p>Hash: ${block.hash}</p>
            <p>Previous Hash: ${block.previousHash}</p>
            <p>Timestamp: ${block.timestamp}</p>
            <p>Transactions: ${JSON.stringify(block.transactions)}</p>
        `;
        blockchainDiv.appendChild(blockDiv);
    });
}

function minePendingTransactions() {
    blockchain.minePendingTransactions('miner-address');
    updateBlockchain();
}

function createTransaction() {
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const amount = parseInt(document.getElementById('amount').value);
    const transaction = new Transaction(sender, recipient, amount);
    blockchain.addTransaction(transaction);
    console.log('Transaction created:', transaction);
    updateBlockchain();
}

function validateChain() {
    const isValid = blockchain.isChainValid();
    if (isValid) {
        alert('Blockchain is valid!');
    } else {
        alert('Blockchain is not valid!');
    }
}

window.onload = () => {
    updateBlockchain();
};
