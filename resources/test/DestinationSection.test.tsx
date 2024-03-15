import { render } from "@testing-library/react"
import { DestinationSection } from "../js/components/DestinationSection"
import React from "react"

describe('Home page test', () => {
    const mockData = {
        data: [
            {
                id: 1,
                place_name_jp: "大阪",
                place_name_en: "oosaka",
                location: "japan",
                departure_date: "2024-03-14",
                price: 566,
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem harum quo exercitationem quas fugit vitae provident. Temporibus, voluptate, commodi nulla molestiae mollitia exercitationem accusamus obcaecati illum laborum facilis excepturi molestias?"
            },
            {
                id: 1,
                place_name_jp: "名古屋",
                place_name_en: "nagoya",
                location: "japan",
                departure_date: "2024-02-24",
                price: 1000,
            },
        ],
        links: [{
            active: true,
            label: "",
            url: ""
        }]
    }
    it("destination section component should display header and tour data", () => {
        const { getByText } = render(<DestinationSection tours={mockData} />)
        const title = getByText(/Most visted destination/i)
        expect(title).toBeInTheDocument()

        mockData.data.forEach(place => {
            const placeNameJapanese = getByText(place.place_name_jp)
            expect(placeNameJapanese).toBeInTheDocument()

            const price = getByText("$" + place.price.toString())
            expect(price).toBeInTheDocument()

            const departure_date = getByText(/2024-02-24/i)
            expect(departure_date).toBeInTheDocument()

        })
    })

    it("should display 'There are no tours !' if there are no data", () => {
        const { getByText } = render(<DestinationSection tours={{ data: [], links: [] }} />)
        const noTourText = getByText(/There are no tours !/i)
        expect(noTourText).toBeInTheDocument()
    })
})