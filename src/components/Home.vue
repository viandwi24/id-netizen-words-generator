<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xs-12">
                    <div class="card mt-4">
                        <div class="card-header">Source</div>
                        <div class="card-body">
                            <div class="form">
                                <div class="form-group">
                                    <label>Teks :</label>
                                    <textarea v-model="source" placeholder="halah" class="form-control"></textarea>
                                </div>
                                <div class="form-group text-center">
                                    <button v-bind:class="[ selected.name == item.name ? 'btn-primary' : 'btn-outline-primary' ]" v-for="item in algorithms" :key="item.$index" @click="applyAlgorithm(item)" class="btn btn-sm mx-1 my-1">{{ item.name }}</button>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <td width="7%" class="text-right pr-2">:</td>
                                            <td>
                                                {{ selected.name }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <td width="7%" class="text-right pr-2">:</td>
                                            <td>
                                                {{ selected.description }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Example</th>
                                            <td width="7%" class="text-right pr-2">:</td>
                                            <td>
                                                {{ selected.exSource }} => {{ selected.exResult }}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-header">Result</div>
                        <div class="card-body">
                            <div class="form">
                                <div class="form-group">
                                    <textarea readonly v-model="result" placeholder="hilih" class="form-control"></textarea>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-sm btn-block btn-outline-success">Copy Text To Clipboard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            algorithms: [
                { name: 'hilih', description: 'Merubah Semua Vokal ke i.', exSource: 'halah', exResult: 'hilih' },
                { name: 'byksw', description: 'Merubah Semua Vokal ke w.', exSource: 'halah', exResult: 'hwlwh' },
                { name: 'awkuw', description: 'Menambah w didepan Vocal', exSource: 'halah', exResult: 'hawlawh' },
                { name: '4l4y', description: 'Merubah huruf mirip ke angka', exSource: 'halah', exResult: 'h4l4h' },
                { name: 'aUtIs', description: 'Membesarkan huruf kelipatan vocal', exSource: 'halah', exResult: 'hAlAh' },
            ],
            selected: null,
            source: '',
        }
    },
    methods: {
        applyAlgorithm(item) {
            this.selected = item
        },
        encryptText(sourceText, algorithm) {
            let result = ''
            switch (algorithm) {
                case 'hilih':
                    result = sourceText.replace(/a|i|u|e|o/gi, 'i')
                    break;

                case 'byksw':
                    result = sourceText.replace(/i/gi, 'w')
                                    .replace(/e/gi, 'w')
                                    .replace(/o/gi, 'w')
                                    .replace(/a/gi, 'w')
                                    .replace(/u/gi, 'w')
                    break;

                case 'awkuw':
                    result = sourceText.replace(/i/gi, 'iw')
                                    .replace(/e/gi, 'ew')
                                    .replace(/o/gi, 'ow')
                                    .replace(/a/gi, 'aw')
                                    .replace(/u/gi, 'uw')
                    break;

                case '4l4y':
                    result = sourceText.replace(/a/gi, '4')
                                    .replace(/b/gi, '13')
                                    .replace(/e/gi, '3')
                                    .replace(/g/gi, '6')
                                    .replace(/i/gi, '1')
                                    .replace(/o/gi, '0')
                                    .replace(/s/gi, '5')
                    break;

                case 'aUtIs':
                    result =  Array.from(sourceText).map((hasil, i) => {
                        if(i % 2 == 0){
                            return hasil.toLowerCase()
                        }else{
                            return hasil.toUpperCase()
                        }
                    }).join("")
                    break;
            
                default:
                    result = sourceText
                    break;
            }
            return result
        }
    },
    computed: {
        result() {
            return this.encryptText(this.source, this.selected.name)
        }
    },
    created() {
        this.selected = this.algorithms[0]
    }
}
</script>