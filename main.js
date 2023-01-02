
import Block from './src/block'


const { genesis } = Block;

console.log(genesis.toString())

const block1 = Block.mine(genesis, 'AAAAAAAA')

console.log(block1.toString())

const block2 = Block.mine(block1, 'BBBBBB')

console.log(block2.toString())