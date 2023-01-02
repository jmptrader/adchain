import { describe, beforeEach, expect, it } from 'vitest'
import Block from '../src/block'

describe('Test Block class', ()=>{
    let timestamp
    let previousBlock
    let hash
    let data

    beforeEach(()=>{
        timestamp = new Date(2000,0,1)
        previousBlock = Block.genesis
        hash = 'h4s4'
        data = 'data' 
    })

    it('create instance of Block with parameters', ()=>{

        const block = new Block(timestamp,previousBlock.hash, hash, data)

        expect(block.data).not.eq('trr')
        expect(block.previousHash).eq(previousBlock.hash)
        expect(block.hash).eq(hash)
        expect(block.data).eq(data)
    })
})