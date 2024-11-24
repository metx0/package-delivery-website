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

let form4 =
`
El final
`

export { form1, form2, options, form4 }
