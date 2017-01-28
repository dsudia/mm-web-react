import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class TraitsSchool extends Component {
    constructor(props) {
        super(props)
        localStorage.setItem(`traits`, JSON.stringify([]))
    }

    handleAmbChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(0)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 0) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleHumChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(1)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 1) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleColChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(2)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 2) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleIndChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(3)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 3) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleExtChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(4)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 4) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleIntChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(5)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 5) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleArtChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(6)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 6) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleMusChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(7)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 7) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleCreChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(8)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 8) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleOrgChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(9)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 9) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handlePlaChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(10)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 10) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleQuiChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(11)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 11) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleVerChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(12)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 12) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleWriChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(13)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 13) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleJoyChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(14)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 14) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleTecChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(15)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 15) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleAnaChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(16)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 16) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handlePatChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(17)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 17) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleSpoChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(18)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 18) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    handleRouChecked(event, isInputChecked) {
        if (isInputChecked) {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            traits.push(19)
            localStorage.setItem(`traits`, JSON.stringify(traits))
        } else {
            const traits = JSON.parse(localStorage.getItem(`traits`))
            const newRanges = traits.filter((el) => {
                if (el !== 19) {
                    return el
                }
                return null
            })
            localStorage.setItem(`traits`, JSON.stringify(newRanges))
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="Ambitious"
                    style={styles.checkbox}
                    onCheck={this.handleAmbChecked}
                />
                <Checkbox
                    label="Humorous"
                    style={styles.checkbox}
                    onCheck={this.handleHumChecked}
                />
                <Checkbox
                    label="Collaborative"
                    style={styles.checkbox}
                    onCheck={this.handleColhecked}
                />
                <Checkbox
                    label="Independent"
                    style={styles.checkbox}
                    onCheck={this.handleIndChecked}
                />
                <Checkbox
                    label="Extroverted"
                    style={styles.checkbox}
                    onCheck={this.handleExtChecked}
                />
                <Checkbox
                    label="Introverted"
                    style={styles.checkbox}
                    onCheck={this.handleIntChecked}
                />
                <Checkbox
                    label="Artistic"
                    style={styles.checkbox}
                    onCheck={this.handleArtChecked}
                />
                <Checkbox
                    label="Musical"
                    style={styles.checkbox}
                    onCheck={this.handleMusChecked}
                />
                <Checkbox
                    label="Creative"
                    style={styles.checkbox}
                    onCheck={this.handleCreChecked}
                />
                <Checkbox
                    label="Organized"
                    style={styles.checkbox}
                    onCheck={this.handleOrgChecked}
                />
                <Checkbox
                    label="Playful"
                    style={styles.checkbox}
                    onCheck={this.handlePlaChecked}
                />
                <Checkbox
                    label="Quiet"
                    style={styles.checkbox}
                    onCheck={this.handleQuiChecked}
                />
                <Checkbox
                    label="Verbal Communicator"
                    style={styles.checkbox}
                    onCheck={this.handleVerChecked}
                />
                <Checkbox
                    label="Written Communicator"
                    style={styles.checkbox}
                    onCheck={this.handleWriChecked}
                />
                <Checkbox
                    label="Joyful"
                    style={styles.checkbox}
                    onCheck={this.handleJoyChecked}
                />
                <Checkbox
                    label="Techie"
                    style={styles.checkbox}
                    onCheck={this.handleOTecChecked}
                />
                <Checkbox
                    label="Analog"
                    style={styles.checkbox}
                    onCheck={this.handleAnaChecked}
                />
                <Checkbox
                    label="Patient"
                    style={styles.checkbox}
                    onCheck={this.handlePatChecked}
                />
                <Checkbox
                    label="Spontaneous"
                    style={styles.checkbox}
                    onCheck={this.handleSpoChecked}
                />
                <Checkbox
                    label="Routine Oriented"
                    style={styles.checkbox}
                    onCheck={this.handleRouChecked}
                />
            </div>
        )
    }
}
