/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {Command} from './Command';
import type {ConsoleIO} from './ConsoleIO';

export default class HelpCommand implements Command {
  name = 'help';
  helpText = 'Give help about the debugger command set.';
  _console: ConsoleIO;
  _getCommands: () => Command[];

  constructor(con: ConsoleIO, getCommands: () => Command[]) {
    this._console = con;
    this._getCommands = getCommands;
  }

  async execute(): Promise<void> {
    this._displayHelp();
  }

  _displayHelp(): void {
    const commands = this._getCommands();
    const commandDict = {};
    commands.forEach(x => (commandDict[x.name] = x));

    const commandNames = commands.map(x => x.name).sort();

    commandNames.forEach(name => {
      this._console.outputLine(`${name}: ${commandDict[name].helpText}`);
    });
  }
}
