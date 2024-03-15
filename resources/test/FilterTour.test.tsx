import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import React from "react"
import Home from "../js/Pages/Home"
import userEvent from "@testing-library/user-event"

describe('Test filter tour', () => {

    const mockData = {
        data: [
        ],
        links: [{
            active: true,
            label: "",
            url: ""
        }]
    }

    it('handle filter by destination', async () => {
        render(<Home tours={mockData} />)
        const destination_input = screen.getByTestId("destination_input")

        expect(destination_input).toBeInTheDocument()

        await userEvent.type(destination_input, "tokyo")
        expect(destination_input).toHaveValue("tokyo")
        screen.debug()
    })
    it('handle filter by date', async () => {
        render(<Home tours={mockData} />)
        const date_input = screen.getByTestId("date_input")

        expect(date_input).toBeInTheDocument()

        await userEvent.type(date_input, "2024-12-14")
        expect(date_input).toHaveValue("2024-12-14")
    })
    it('handle filter by price', async () => {
        render(<Home tours={mockData} />)
        const minPrice_input = screen.getByTestId("minPrice_input")
        const maxPrice_input = screen.getByTestId("maxPrice_input")

        expect(minPrice_input).toBeInTheDocument()
        expect(maxPrice_input).toBeInTheDocument()

    })

    it("show alert when max price is less than min price", async () => {
        render(<Home tours={mockData} />)
        const minPrice_input = screen.getByTestId("minPrice_input")
        const maxPrice_input = screen.getByTestId("maxPrice_input")

        fireEvent.change(minPrice_input, { target: { value: 4000 } })
        fireEvent.change(maxPrice_input, { target: { value: 2000 } })
    })


    it("clear form when click cancel", async () => {
        render(<Home tours={mockData} />)
        const cancelBtn = screen.getByTestId("cancelBtn")

        const destination_input = screen.getByTestId("destination_input")
        const date_input = screen.getByTestId("date_input")
        const minPrice_input = screen.getByTestId("minPrice_input")
        const maxPrice_input = screen.getByTestId("maxPrice_input")

        await userEvent.type(destination_input, "oosaka")
        await userEvent.type(date_input, "2024-12-14")
        await userEvent.type(minPrice_input, String(2000))
        await userEvent.type(maxPrice_input, String(2500))

        fireEvent.click(cancelBtn, () => {
            expect(destination_input).toBe("")
            expect(date_input).toBe("")
            expect(minPrice_input).toBe("")
            expect(maxPrice_input).toBe("")
        })

    })
})