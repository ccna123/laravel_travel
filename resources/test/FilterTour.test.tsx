import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import React from "react"
import Home from "../js/Pages/Home"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { Main } from "../js/components/Main"

describe('Test filter tour', () => {

    const mockData = {
        data: [
            {
                id: 1,
                place_name_jp: "大阪",
                place_name_en: "oosaka",
                location: "japan",
                departure_date: "2024-03-14",
                price: 566,
                image: "",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem harum quo exercitationem quas fugit vitae provident. Temporibus, voluptate, commodi nulla molestiae mollitia exercitationem accusamus obcaecati illum laborum facilis excepturi molestias?"
            },
            {
                id: 1,
                place_name_jp: "名古屋",
                place_name_en: "nagoya",
                location: "japan",
                image: "",
                departure_date: "2024-02-24",
                price: 1000,
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem harum quo exercitationem quas fugit vitae provident. Temporibus, voluptate, commodi nulla molestiae mollitia exercitationem accusamus obcaecati illum laborum facilis excepturi molestias?"
            },
        ],
        links: [{
            active: true,
            label: "",
            url: ""
        }]
    }

    const mockAlert = jest.fn();
    global.alert = mockAlert

    // render(<Home tours={mockData} />)

    it('input text is changed for destination', async () => {
        const destination_input = screen.getByTestId("destination_input")


        expect(destination_input).toBeInTheDocument()

        await userEvent.type(destination_input, "tokyo")
        expect(destination_input).toHaveValue("tokyo")
        screen.debug()
    })
    it('input text is changed frr date', async () => {
        const date_input = screen.getByTestId("date_input")


        expect(date_input).toBeInTheDocument()

        await userEvent.type(date_input, "2024-12-14")
        expect(date_input).toHaveValue("2024-12-14")
    })
    it('input text is changed for price', async () => {
        const minPrice_input = screen.getByTestId("minPrice_input")
        const maxPrice_input = screen.getByTestId("maxPrice_input")

        expect(minPrice_input).toBeInTheDocument()
        expect(maxPrice_input).toBeInTheDocument()

    })

    it('show alert when inputs are empty', () => {
        const filterBtn = screen.getByTestId("filterBtn")
        fireEvent.click(filterBtn, () => {

            expect(mockAlert).toHaveBeenCalledWith("Please do not leave empty input fields")
        })

    });

    it('filter functions are called', () => {
        const handleFilter = jest.fn();

        render(<Main
            date={""}
            search={""}
            minPrice={0}
            maxPrice={0}
            setDate={() => { }}
            setSearch={() => { }}
            setMinPrice={() => { }}
            setMaxPrice={() => { }}
            handleFilter={handleFilter}
            handleClearFilter={() => { }}
        />)

        const filterBtn = screen.getByTestId("filterBtn")


        const destination_input = screen.getByTestId("destination_input")
        const date_input = screen.getByTestId("date_input")
        const minPrice_input = screen.getByTestId("minPrice_input")
        const maxPrice_input = screen.getByTestId("maxPrice_input")

        fireEvent.change(destination_input, {
            target: {
                value: "tokyo"
            }
        })
        fireEvent.change(date_input, {
            target: {
                value: "2024-03-14"
            }
        })
        fireEvent.change(minPrice_input, {
            target: {
                value: 2000
            }
        })
        fireEvent.change(maxPrice_input, {
            target: {
                value: 3000
            }
        })

        fireEvent.click(filterBtn, () => {
            expect(handleFilter).toHaveBeenCalledTimes(1);
        });
    });

    it("show alert when max price is less than min price", async () => {

        const minPrice_input = screen.getByTestId("minPrice_input")
        const maxPrice_input = screen.getByTestId("maxPrice_input")

        fireEvent.change(minPrice_input, { target: { value: 4000 } })
        fireEvent.change(maxPrice_input, { target: { value: 2000 } })

        const filterBtn = screen.getByTestId("filterBtn")
        fireEvent.click(filterBtn, () => {

            expect(mockAlert).toHaveBeenCalledWith("Please input a max price greater than or equal to the minimum price")
        })

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
    it("all tour should display when click on cancel", async () => {
        const { getByText } = render(<Home tours={mockData} />)
        const cancelBtn = screen.getByTestId("cancelBtn")

        userEvent.click(cancelBtn)

        mockData.data.forEach(place => {
            const placeNameJapanese = getByText(place.place_name_jp)

            const price = getByText("$" + place.price.toString())

            const departure_date = getByText(/2024-02-24/i)

            expect(placeNameJapanese).toBeInTheDocument()
            expect(price).toBeInTheDocument()
            expect(departure_date).toBeInTheDocument()
        })
    })
})