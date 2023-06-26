export class errorGeneral extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status
    }

    sendResponse(res) {
        res.status(this.status).json({
            message: this.message,
            status: this.status
        })
    }
}

export class errorInternal extends errorGeneral {
    constructor(message = "Internal server error.", status = 500) {
        super(message, status);
    }
}

export class errorRequest extends errorGeneral {
    constructor(message = "One or more data was provided wrong.", status = 400) {
        super(message, status);
    }
}

export class errorValidation extends errorGeneral {
    constructor(error, status = 400) {
        const errorMessages = Object.values(error.errors)
            .map(e => e.message)
            .join('; ')

        const message = `Error with required paths: ${errorMessages}`

        super(message, status);
    }
}

export class errorNotFounded extends errorGeneral {
    constructor(message = "Not Founded", status = 404) {
        super(message, status);
    }
}