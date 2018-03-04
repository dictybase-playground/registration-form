import React from "react"
import Button from "material-ui/Button"
import ArrowBack from "material-ui-icons/ArrowBack"

const BackButton = props => {
    return (
        <Button
            onClick={props.onBackClick}
            size="small"
            variant="raised"
            color="secondary">
            <ArrowBack />
            Back
        </Button>
    )
}

export default BackButton
