import React from "react"
import Button from "material-ui/Button"
import ArrowForward from "material-ui-icons/ArrowForward"

const NextButton = () => {
    return (
        <Button type="submit" size="small" variant="raised" color="primary">
            Next &nbsp; <ArrowForward />
        </Button>
    )
}

export default NextButton
