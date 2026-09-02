"""Entry point.

Supports both `python3 -m md2json` (run as a package, from utils/ or with
utils/ on PYTHONPATH) and `python3 utils/md2json` from anywhere. In the latter
case Python puts *this* directory on sys.path rather than its parent, so the
package is not importable by name and relative imports fail; add the parent
directory and import absolutely instead.
"""

import sys
from pathlib import Path

if __package__:
    from .cli import main
else:  # python3 utils/md2json
    sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
    from md2json.cli import main

raise SystemExit(main())
