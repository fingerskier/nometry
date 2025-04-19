import {describe, it, expect} from "vitest"
import {MovingAverage} from "./index.js"


describe("MovingAverage", () => {
  console.debug("MovingAverage", MovingAverage)
  it("should be a class", () => {
    const movingAverage = new MovingAverage()
    expect(movingAverage).toBeInstanceOf(MovingAverage)
  })
  
  it("should have a default value of 0", () => {
    const movingAverage = new MovingAverage()
    expect(movingAverage.value).toBe(0)
  })
  
  it("should have a default smoothness of 10", () => {
    const movingAverage = new MovingAverage()
    expect(movingAverage.smoothness).toBe(10)
  })
  
  it("should have a default values array", () => {
    const movingAverage = new MovingAverage()
    expect(movingAverage.values).toEqual([])
  })
  
  it("should update the value", () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    expect(movingAverage.value).toBe(1)
  })
  
  it("should update the value with a new value", () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    movingAverage.update(2)
    movingAverage.update(3)
    expect(movingAverage.value).toBe(2)
  })
  
  it('should give a mean of the values', () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    movingAverage.update(2)
    movingAverage.update(3)
    movingAverage.update(4)
    movingAverage.update(5)
    expect(movingAverage.mean()).toBe(3)
  })
  
  it('should give a standard deviation of the values', () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    movingAverage.update(2)
    movingAverage.update(3)
    movingAverage.update(4)
    movingAverage.update(5)
    expect(movingAverage.standardDeviation()).toBe(1.4142135623730951)
  })
  
  it('should give a forecast of the values', () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    movingAverage.update(2)
    movingAverage.update(3)
    movingAverage.update(4)
    movingAverage.update(5)
    expect(movingAverage.forecast()).toBe(3)
  })
  
  it('should give a variance of the values', () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    movingAverage.update(2)
    movingAverage.update(3)
    expect(movingAverage.variance()).toBe(0.6666666666666666)
  })
  
  it('should give the current value when converted to a number', () => {
    const movingAverage = new MovingAverage()
    movingAverage.update(1)
    movingAverage.update(2)
    movingAverage.update(3)
    movingAverage.update(2)
    movingAverage.update(1)
    expect(+movingAverage).toBe(1.8)
  })
})