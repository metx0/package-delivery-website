// The HTML code of the forms as JS variables

let form1 = /*html*/
    `
<form>  
    <div class="mb-3">
        <label for="originZip" class="form-label"
            >Origin Zip Code</label
        >
        <input
            type="number"
            id="originZip"
            name="originZip"
            class="form-control"
            placeholder="Enter origin zip code"
            min="1"
            maxlength="10"
            required
        />
    </div>
    <div class="mb-3">
        <label for="destinationZip" class="form-label"
            >Destination Zip Code</label
        >
        <input
            type="number"
            id="destinationZip"
            name="destinationZip"
            class="form-control"
            placeholder="Enter destination zip code"
            min="1"
            maxlength="10"
            required
        />
    </div>
    <button type="button" class="btn btn-primary btn-next">Next</button>
</form>
`

let form2 = /*html*/
    `
<form>
<p class="fw-bold text-center">
    Enter weight and dimension of the packet (kg, cm)
</p>
<div class="d-flex flex-column align-items-center mb-3">
    <label for="packetWeight" class="form-label"
        >Weight</label
    >
    <input
        type="number"
        id="packetWeight"
        name="packetWeight"
        class="form-control w-50 input-all m-auto"
        placeholder="Weight in kg"
        min="0"
        maxlength="10"
        required
    />
</div>
<div class="container-dimensions mb-3">
    <div class="container-dimension-input">
        <label for="packetHeight" class="form-label"
            >Height</label
        >
        <input
            type="number"
            id="packetHeight"
            name="packetHeight"
            class="form-control"
            placeholder="Height in cm"
            min="1"
            maxlength="10"
            required
        />
    </div>
    <div class="container-dimension-input">
        <label for="packetWidth" class="form-label"
            >Width</label
        >
        <input
            type="number"
            id="packetWidth"
            name="packetWidth"
            class="form-control"
            placeholder="Height in cm"
            min="1"
            maxlength="10"
            required
        />
    </div>
    <div class="container-dimension-input">
        <label for="packetLength" class="form-label"
            >Length</label
        >
        <input
            type="number"
            id="packetLength"
            name="packetLength"
            class="form-control"
            placeholder="Length in cm"
            min="1"
            maxlength="10"
            required
        />
    </div>
</div>
<div class="d-flex justify-content-between">
    <button
        type="button"
        class="btn btn-primary btn-previous"
    >
        Previous
    </button>
    <button type="button" class="btn btn-primary btn-next">
        Next
    </button>
</div>
</form>
`

let options = /*html*/
    `
<div>
    <p class="text-center fw-bold">
        Select an option for your delivery
    </p>
    <div class="container-options">
        <div class="option">
            <img
                class="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Logo_de_Estafeta.svg"
                alt=""
            />
            <button class="btn btn-primary btn-option btn-next estafeta">
                Select
            </button>
        </div>
        <div class="option">
            <img
                class="w-100"
                src="https://www.redpack.com.mx/wp-content/uploads/2021/06/logored-uai-2064x306.png"
                alt=""
            />
            <button class="btn btn-primary btn-option btn-next redpack">
                Select
            </button>
        </div>
        <div class="option">
            <img
                class="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/1280px-DHL_Logo.svg.png"
                alt=""
            />
            <button class="btn btn-primary btn-option btn-next dhl">
                Select
            </button>
        </div>
        <div class="option">
            <img
                class="w-100"
                src="https://nwafoundation.org/wp-content/uploads/2017/04/FedEx-Logo-PNG-Transparent.png"
                alt=""
            />
            <button class="btn btn-primary btn-option btn-next fedex">
                Select
            </button>
        </div>
    </div>
    <div class="d-flex justify-content-between mt-3">
        <button
            type="button"
            class="btn btn-primary btn-previous"
        >
            Previous
        </button>
    </div>
</div>
`

let form4 = /*html*/
        `
    <form>
    <p class="fw-bold text-center">
        Now, we need you to enter personal data
    </p>
    <div class="mb-3">
        <label for="sender" class="form-label">Sender</label>
        <input
            type="text"
            id="sender"
            name="sender"
            class="form-control"
            placeholder="Your name"
            required
        />
    </div>
    <div class="mb-3">
        <label for="recipient" class="form-label"
            >Recipient</label
        >
        <input
            type="text"
            id="recipient"
            name="recipient"
            class="form-control"
            placeholder="Who receives"
            required
        />
    </div>
    <div
        class="mb-3 container-direction d-flex justify-content-center gap-3"
    >
        <div class="container-direction-data">
            <label for="street" class="form-label"
                >Street</label
            >
            <input
                type="text"
                id="street"
                name="street"
                class="form-control"
                placeholder="Street"
                required
            />
        </div>
        <div class="container-direction-data">
            <label for="colony" class="form-label"
                >Colony</label
            >
            <input
                type="text"
                id="colony"
                name="colony"
                class="form-control"
                placeholder="Colony"
                required
            />
        </div>
        <div class="container-direction-data">
            <label for="city" class="form-label">City</label>
            <input
                type="text"
                id="city"
                name="city"
                class="form-control"
                placeholder="City"
                required
            />
        </div>
    </div>
    <div
        class="mb-3 container-tel d-flex justify-content-around"
    >
        <div class="container-tel-data">
            <label for="phone-number" class="form-label"
                >Phone number</label
            >
            <input
                type="number"
                id="phone-number"
                name="phone-number"
                class="form-control"
                placeholder="Phone number"
                required
            />
        </div>
        <div class="container-tel-data">
            <label for="email" class="form-label"
                >Email</label
            >
            <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Email"
                required
            />
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <button
            type="button"
            class="btn btn-primary btn-previous"
        >
            Previous
        </button>
        <button type="button" class="btn btn-primary btn-next">
            Next
        </button>
    </div>
</form>
`

export { form1, form2, options, form4 }
