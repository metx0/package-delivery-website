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
`

export { form1, form2, options }
