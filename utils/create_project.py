import os
import errno
import sys
from yaml import load

# load yaml chapter definition
if not (len(sys.argv) == 2):
    sys.exit("Wrong number of arguments")
chapterfile = sys.argv[1]

orgmode = False
mdmode = True

with open(chapterfile) as f:
    chapter = load(f)


if chapter['export_mode'] == 'org':
    orgmode = True
    mdmode = False
    
# create chapter dir
chapter_dir = chapter['dir_name']
try:
    os.mkdir(chapter_dir)
    print("Chapter directory '{}' created.".format(chapter_dir))
except FileExistsError as e:
    print("Chapter directory '{}' already exists.".format(chapter_dir))
    sys.exit(e.errno)

# create chapter index
chapter_fm="""---
layout: circuitverse
title: {toc_title}
nav_order: {order}
has_children: true
has_toc: false
---"""

chapter_title_md="""# {title}
{{: .no_toc}}

## Table of contents
{{: .no_toc .text-delta}}"""

chapter_title_org="""* {title}
  :PROPERTIES:
  :JTD:      {{: .no_toc}}
  :END:
  
** Table of contents
   :PROPERTIES:
   :JTD:      {{: .no_toc .text-delta}}
   :END:"""

section_fm="""---
layout: circuitverse
title: {toc_title}
nav_order: {order}
cvib_level: {level}
parent: {chapter}
has_children: false
---"""

section_title_md = chapter_title_md

section_title_org = chapter_title_org

section_toc_md = "1. TOC\n{:toc}"

section_toc_org = "#+BEGIN_EXPORT html\n" + section_toc_md + "\n#+END_EXPORT"


chapter_filename = chapter_dir+'/'+'index.md'
if orgmode:
    chapter_filename = chapter_dir+'/'+'index.org'

with open(chapter_filename, 'w') as cf:
    if orgmode:
        print("#+OPTIONS: toc:nil todo:nil title:nil author:nil date:nil\n",
              file=cf)
        print("#+BEGIN_EXPORT html", file=cf)


    # frontmatter
    if 'order' in chapter:
        order = chapter['order']
    else:
        order = ""
    print(chapter_fm.format(toc_title=chapter['toc_title'], order=order),
          file=cf)
    if orgmode:
        print("#+END_EXPORT", file=cf)
    print("", file=cf)

    # main heading and toc heading
    if mdmode:
        print(chapter_title_md.format(title=chapter['title']), file=cf)
    elif orgmode:
        print(chapter_title_org.format(title=chapter['title']), file=cf)
    print("", file=cf)    

    # chapter table of contents
    if orgmode:
        print("#+BEGIN_EXPORT html", file=cf)
    print("{% include chapter_toc.html %}", file=cf)
    if orgmode:
        print("#+END_EXPORT", file=cf)
    print("", file=cf)

    # create sections
    order = 1
    for level_order, level in enumerate(('basic', 'medium', 'advanced')):
        if level in chapter['sections']:
            for section_order, section in enumerate(chapter['sections'][level]):
                # order string of the form l2s001, encoding level and section
                order = 'l'+str(level_order)+'s'+str(section_order).zfill(3)
                section_filename = chapter_dir+'/'+section['filename']+'.md'
                if orgmode:
                    section_filename = chapter_dir+'/'+section['filename']+'.org'
                with open(section_filename, 'w') as sf:
                    if orgmode:
                        print("#+OPTIONS: toc:nil todo:nil title:nil author:nil date:nil\n",
                              file=sf)
                        print("#+BEGIN_EXPORT html", file=sf)
                    # section's frontmatter
                    print(section_fm.format(chapter=chapter['toc_title'],
                                            toc_title=section['toc_title'],
                                            title=section['title'],
                                            order=order,
                                            level=level), file=sf)
                    if orgmode:
                        print("#+END_EXPORT", file=sf)
                    print("", file=sf)
                    #main heading and toc heading
                    if mdmode:
                        print(section_title_md.format(title=section['title']), file=sf)
                    elif orgmode:
                        print(section_title_org.format(title=section['title']), file=sf)
                    print("", file=sf)
                    # section table of content
                    if mdmode:
                        print(section_toc_md, file=sf)
                    elif orgmode:
                        print(section_toc_org, file=sf)
                    # inform we are ready with the section
                    print("- Section '{}' (file: {}) created.".format(section['toc_title'],
                                                                      section['filename']))
                    
    # tell the user the chapter is finished
    print('Chapter created')
