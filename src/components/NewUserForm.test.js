import React from "react"
import renderer from "react-test-renderer"
import NewUserForm from "./NewUserForm"

test("matching a snapshot of NewUserForm", () => {
    const component = renderer.create(<NewUserForm />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
