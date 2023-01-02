import { describe, beforeEach, expect, it } from 'vitest'

import Blockchain from '../src/blockchain'
import Validate from '../src/modules/validate'

describe('Validate integrity blockchain test suite', () => {

    let blockchain

    beforeEach(() => {
        blockchain = new Blockchain() 
    })
    
    it('validate an valid chain', () => {

        blockchain.addBlock('block-1')
        blockchain.addBlock('block-2')

        expect(Validate(blockchain.blocks)).toEqual(true)
    })

    it('invalid a chain with corrupt genesis block', () => {

        blockchain.blocks[0].data = 'c0rrUpt-1'

        expect(()=>{
            Validate(blockchain.blocks)
        }).toThrowError('Invalid genesis block.')

    })

    it('invalid a chain with corrupt previous hash', () => {

        blockchain.addBlock('block-1')
        blockchain.blocks[1].previousHash = 'hack-previous-hash'

        expect(()=>{
            Validate(blockchain.blocks)
        }).toThrowError('Invalid previous hash.')

    })    

    it('invalid a chain with corrupt hash', () => {

        blockchain.addBlock('block-1')
        blockchain.blocks[1].data = 'hack-data'

        expect(()=>{
            Validate(blockchain.blocks)
        }).toThrowError('Invalid hash.')

    })  

})