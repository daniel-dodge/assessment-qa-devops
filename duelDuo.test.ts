
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('draw button displays the choices div', async () => {
    await driver.findElement(By.id('draw')).click()
    const div = await driver.findElement(By.id('choices'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})
test('draw button displays the choices div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const div = await driver.findElement(By.id('player-duo'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})