import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Search from "../js/Pages/Search"
import { router } from "@inertiajs/react"

const mockData = {
    customer_name: "",
    customer_email: "",
    customer_address: "",
    customer_phone: "",
    destination: "",
    number_of_stay: 0,
    number_of_people: 0,
    number_of_adult: 0,
    number_of_children: 0,
    transportation: "",
    total: 0
}
const mockAlert = jest.fn();
global.alert = mockAlert

jest.mock("@inertiajs/react", () => ({
    router: {
        post: jest.fn()
    }
}))
describe('should test search', () => {
    const { getByTestId } = render(<Search tour={null} />)
    const searchBtn = getByTestId("searchBtn")
    const search_input = getByTestId("search_input")
    it('input text change', async () => {

        await userEvent.type(search_input, "test")
        expect(search_input).toHaveValue("test")
    });

    it('show alert when no input', () => {
        fireEvent.click(searchBtn, () => {
            expect(mockAlert).toHaveBeenCalledWith("Please enter a search")
        })

    });

    it('test handle post function is called', () => {

        fireEvent.change(search_input, { target: { value: "testing" } })
        fireEvent.click(searchBtn, async () => {

            await waitFor(() => {
                expect(router.post).toHaveBeenCalledWith("/tours/search", {
                    searchInput: "testing"
                })
            })
        })


    });

    it('show "There are no tours" text when tour is null ', () => {
        const { getByText } = render(<Search tour={null} />)
        expect(getByText(/There are no tours/i)).toBeInTheDocument()
    });
    it('show booking info text when tour is not null ', () => {
        const { getByText } = render(<Search tour={mockData} />)
        expect(getByText(/Address/i)).toBeInTheDocument()
        expect(getByText(/Email/i)).toBeInTheDocument()
        expect(getByText(/Number of Stays/i)).toBeInTheDocument()
    });
})
