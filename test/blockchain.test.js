import { describe, beforeEach, expect, it } from 'vitest'

import Blockchain from '../src/blockchain'
import Block from '../src/block'


describe('Blockchain tests cases', () => {
    let blockchain
    let blockchainB

    beforeEach(() => {
        blockchain = new Blockchain()
        blockchainB = new Blockchain()
    })


    it('every Blockchain must be an genesis block', () => {
        // const genesisBlock = blockchain.blocks[0]   //opcion 1
        const [genesisBlock] = blockchain.blocks

        expect(genesisBlock).toEqual(Block.genesis)
        expect(blockchain.blocks.length).toEqual(1)
    })

    it('use addBlock method', () => {
       
        const data = 'bl0quE-1'
        // const lastBlock =  blockchain.addBlock(data) // opcion 1

        blockchain.addBlock(data)
        const [ , lastBlock] = blockchain.blocks  

        expect(lastBlock.data).toEqual(data)
        expect(blockchain.blocks.length).toEqual(2)
    })

    it('replace the current chain with valid new chain', ()=> {
        blockchainB.addBlock('new-block-b')

        blockchain.replace(blockchainB.blocks)

        expect(blockchain.blocks).toEqual(blockchainB.blocks)
    })

    it('does not replace with new chain is not longer', ()=> {
        blockchain.addBlock('new-block-a')

        expect(()=>{

            blockchain.replace(blockchainB.blocks)
  
        }).toThrowError('Recieved chain is not longer than current chain.')

    })    

    it('does not replace with a invalid new chain', ()=> {
        
        const block = blockchainB.addBlock('new-block-b')
        block.hash = 'hack-hash-in-new-block'
        blockchainB.blocks[1].data = 'hack-data-in-new-block'
        
        expect(()=>{

            blockchain.replace(blockchainB.blocks)
  
        }).toThrowError('Recieved chain is invalid.')

    })      
})