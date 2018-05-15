import React from "react"
import renderer from "react-test-renderer"
import SocialForm from "./SocialForm"

test("matching a snapshot of SocialForm", () => {
    const component = renderer.create(<SocialForm />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
