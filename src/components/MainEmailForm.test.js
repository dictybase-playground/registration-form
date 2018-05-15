import React from "react"
import renderer from "react-test-renderer"
import MainEmailForm from "./MainEmailForm"

test("matching a snapshot of MainEmailForm", () => {
    const component = renderer.create(<MainEmailForm />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
